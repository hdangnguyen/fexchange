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
    [Route("api/notifications")]
    [ApiController]
    public class NotificationController : ControllerBase
    {
        private INotificationRepository notificationRepository;
        private IMapper mapper;
        public NotificationController(IMapper mapper,INotificationRepository notificationRepository)
        {
            this.notificationRepository = notificationRepository;
            this.mapper = mapper;
        }
        [HttpGet("{id}")]
        public NotificationDTO get(int id)
        {
            Notification noti = notificationRepository.get(id);
            return mapper.Map<NotificationDTO>(noti);
        }
        [HttpDelete("{id}")]
        public void delete(int id)
        {
            Notification notification = notificationRepository.get(id);
            notificationRepository.delete(notification);
        }
        [HttpPost("")]
        public void create(NotificationDTO dto)
        {
            Notification notification = mapper.Map<Notification>(dto);
            notificationRepository.create(notification);
        }
        [HttpGet("{pageSize}/{pageNumber}")]
        public List<NotificationDTO> search(int accountID,int pageSize,int pageNumber)
        {
            PagingParams p = new PagingParams()
            {
                PageSize = pageSize,
                PageNumber = pageNumber
            };
            List<Notification> list = notificationRepository.getNotifications(accountID, p).List;
            return list.Select(x => mapper.Map<NotificationDTO>(x)).ToList();
        }
        [HttpPut("")]
        public void update(NotificationDTO dto)
        {
            Notification noti = notificationRepository.get(dto.Id);
            noti.Subject = dto.Subject;
            notificationRepository.update(noti);
        }
    }
}
