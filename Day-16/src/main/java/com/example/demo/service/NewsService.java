//package com.example.demo.service;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import com.example.demo.model.NewsSource;
//import com.example.demo.repository.NewsRepo;
//
//@Service
//public class NewsService {
//@Autowired
//NewsRepo rep;
//public String update(NewsSource ns,int nid) 
//{
//	if(rep.existsById(nid)) 
//	{
//		NewsSource n = new NewsSource();
//		n.setNid(ns.getNid());
//		n.setTitle(ns.getTitle());
//		n.setUrl(ns.getUrl());
//		n.setImg(ns.getImg());
//		n.setDescription(ns.getDescription());
//		rep.save(n);
//         return "Updated";
//	}
//	else
//		return "Id doesn't exist";
//}
//
//public String del(int nid) 
//{
// if(rep.existsById(nid))
// {
//	 rep.deleteById(nid);
//	 return "Id "+nid+" deleted successfully";
// }
// else
//	 return "Id doesn't exist";
//}
//}
