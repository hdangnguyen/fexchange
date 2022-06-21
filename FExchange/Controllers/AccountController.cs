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
    [Route("api/acounts")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private IAccountRepository AccountRepository;
        private IMapper mapper;
        private IWebHostEnvironment environment;
        private FExchangeContext context;
        public AccountController(IMapper mapper, IAccountRepository accountRepository)
        {
            AccountRepository = accountRepository;
            this.mapper = mapper;
            context = new FExchangeContext();
        }
        [HttpPost("uploadImage")]
        public async  Task<string> upload(IFormFile file)
        {
            FileInfo fileInfo;
            
            string connectionString = "DefaultEndpointsProtocol=https;AccountName=merry;AccountKey=AOHLpp9ABjn/pEwmw6skcyzHGoujukf2KFTAkWFBt8LpSZ19cTohCv/bLXhMrRBJqHqok47dVRRk+ASt1s4qRA==;EndpointSuffix=core.windows.net";
            string containerName = "yume"; 
            var container = new BlobContainerClient(connectionString,containerName);
            try
            {
                var blobClient = container.GetBlobClient(file.FileName);
                using (var ms = new MemoryStream())
                {
                    file.CopyTo(ms);
                    ms.Position = 0;
                    var blobHttpHeader = new BlobHttpHeaders { ContentType = "image/jpeg" };
                    await blobClient.UploadAsync(ms, new BlobUploadOptions { HttpHeaders = blobHttpHeader });
                    
                }
               return "https:\\merry.blob.core.windows.net\\yume\\" + file.FileName;
             
            }catch(Exception ex)
            {
                throw new Exception(ex.Message);
            }
            return "Not OK";
        }
        [HttpPost("")]
        public void create([FromBody] AccountDTO dto)
        {
            Account acc = mapper.Map<Account>(dto);
            AccountRepository.create(acc);
        }
        private void connect(Account account,int id)
        {
            
        }
        [HttpGet("{id}")]
        public AccountDTO get(int id)
        {
            Account account = AccountRepository.findById(id);
            
            AccountDTO acc = mapper.Map<AccountDTO>(account);
            
            return acc;
        }
        [HttpDelete("{id}")]
        public void delete(int id)
        {
            Account acc = AccountRepository.findById(id);
            acc.Status = "Inactive";
            AccountRepository.update(acc);  
        }
        [HttpGet("{pageSize}/{pageNumber}")]
        public List<AccountDTO> search(int? NumberOfProductPosts,int? NumberOfOrders,string? name, int pageSize,int pageNumber)
        {
            PagingParams pagingParams = new PagingParams()
            {
                PageNumber = pageNumber,
                PageSize = pageSize,
            };
            Dictionary<int, Account> dic = new Dictionary<int, Account>();
            if (NumberOfOrders != null)
            {
                List<Account> accounts = AccountRepository
                    .findAll(x => x.Orders.Count >= NumberOfOrders && x.Status == "Active", pagingParams)
                    .List;
                foreach (Account account in accounts) dic.Add(account.Id, account);
            }
            if (NumberOfProductPosts != null)
            {
                    List<Account> accounts = AccountRepository
                        .findAll(x => x.ProductPosts.Count >= NumberOfProductPosts && x.Status == "Active",pagingParams).List;
                foreach (var account in accounts)
                {
                    if (!dic.ContainsKey(account.Id)) dic.Add(account.Id, account);
                }
            }
            if (name != null)
            {
                List<Account> accounts = AccountRepository
                    .findAll(x => x.FullName.Contains(name) && x.Status == "Active", pagingParams)
                    .List;
                foreach (Account account in accounts) dic.Add(account.Id, account);
            }
            return dic.Values.Select(x => mapper.Map<AccountDTO>(x)).ToList();
        }
        [HttpPut("")]
        public void update(AccountDTO dto)
        {
            Account account = mapper.Map<Account>(dto);
            AccountRepository.update(account);
            //context.Accounts.Update(account);
            //context.SaveChanges();
        }
    }
}
