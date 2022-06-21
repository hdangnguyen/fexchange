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
    [Route("api/orders")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private IOrderRepository _orderRepository;
        private IMapper mapper;
        public OrderController(IMapper mapper, IOrderRepository orderRepository) 
        { 
            this.mapper = mapper;
            _orderRepository = orderRepository;
        }

        [HttpGet("{id}")]
        public OrderDTO get(int id)
        {
            Order order = _orderRepository.get(id);
            return mapper.Map<OrderDTO>(order);
        }
        [HttpDelete("{id}")]
        public void delete(int id)
        {
        }
        [HttpGet("{pageNumber}/{pageSize}")]
        public List<OrderDTO> search(int? BuyerID, int? rate, bool all, int pageNumber, int pageSize)
        {
            PagingParams p = new PagingParams()
            {
                PageNumber = pageNumber,
                PageSize = pageSize
            };
            if (all)
            {
                return _orderRepository.findByRate(0,p).List.Select(o => mapper.Map<OrderDTO>(o)).ToList();
            }
            else
            {
                Dictionary<int, Order> dic = new Dictionary<int, Order>();
                if (BuyerID != null)
                {
                    List<Order> orders = _orderRepository.findByUserID((int)BuyerID, p).List;
                    foreach (Order order in orders) dic.Add(order.Id, order);
                }
                else if (rate != null)
                {
                    List<Order> orders = _orderRepository.findByRate((int)rate, p).List;
                    foreach (Order order in orders) dic.Add(order.Id, order);
                }
                return dic.Values.Select(o => mapper.Map<OrderDTO>(o)).ToList();
            }
            
        }
        [HttpPost("")]
        public void create([FromBody]OrderDTO dto)
        {
            Order order = mapper.Map<Order>(dto);
            _orderRepository.create(order);
        }
        [HttpPut("")]
        public void update([FromBody] OrderDTO dto)
        {
            Order order = _orderRepository.get(dto.Id);   
            order.Feedback = dto.Feedback;
            order.Price = dto.Price;
            order.Price2 = dto.Price2;
            order.Rate = dto.Rate;
            _orderRepository.update(order);

        }
    }
}
