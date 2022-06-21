using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using BusinessObject.Models;
using FExchange.DTOs;
using AutoMapper;
using System.Linq;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Net.Http;
using System.IO;
using Azure.Storage.Blobs;
using Microsoft.AspNetCore.Hosting;
using System;
using Azure.Storage.Blobs.Models;
using DataAccess.IRepository;
using DataAccess.Repository;
using Microsoft.EntityFrameworkCore;
using DataAccess.Paging;

namespace FExchange.Controllers
{
    [Route("api/exchangedesires")]
    [ApiController]
    public class ExchangeDesireController : ControllerBase
    {
        private IMapper mapper;
        private IExchangeDesireRepository exchangeDesireRepository;
        public ExchangeDesireController(IMapper mapper,IExchangeDesireRepository exchangeDesireRepository)
        {
            this.mapper = mapper;
            this.exchangeDesireRepository = exchangeDesireRepository;
        }
        [HttpGet("{id}")]
        public ExchangeDesireDTO get(int id)
        {
            return mapper.Map<ExchangeDesireDTO>(
                    exchangeDesireRepository.get(id)
                );
        }
        [HttpGet("{pageNumber}/{pageSize}")]
        public List<ExchangeDesireDTO> search(int? categoryId,int? productId,int pageNumber,int pageSize)
        {
            PagingParams pagingParams = new PagingParams()
            {
                PageSize = pageSize,
                PageNumber = pageNumber
            };
            if (productId!=null)
            {
                return exchangeDesireRepository.getAllByProduct((int)productId,pagingParams)
                    .List.Select(x => mapper.Map<ExchangeDesireDTO>(x)).ToList();
            }
            if (categoryId != null)
            {
                return exchangeDesireRepository.getAllByCategory((int)categoryId, pagingParams)
                    .List.Select(x => mapper.Map<ExchangeDesireDTO>(x)).ToList();
            }
            return null;
        }
        [HttpDelete("{id}")]
        public void delete(int id)
        {
            //ExchangeDesire desire = exchangeDesireRepository.get(id);
            exchangeDesireRepository.delete(id);
        }
        [HttpPost]
        public void create([FromBody]ExchangeDesireDTO dto)
        {
            ExchangeDesire exchangeDesire = mapper.Map<ExchangeDesire>(dto);
            exchangeDesireRepository.create(exchangeDesire);
        }
        [HttpPut]
        public void update([FromBody]ExchangeDesireDTO dto)
        {
            ExchangeDesire exchangeDesire = exchangeDesireRepository.get(dto.Id);
            exchangeDesire.CategoryId = dto.CategoryId;
            exchangeDesire.ProductId = dto.ProductId;
        }
    }
}
