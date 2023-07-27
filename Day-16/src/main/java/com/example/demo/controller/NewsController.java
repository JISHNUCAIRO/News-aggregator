//package com.example.demo.controller;
//
//import java.util.List;
//import java.util.Optional;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.example.demo.model.NewsSource;
//import com.example.demo.repository.NewsRepo;
//import com.example.demo.service.NewsService;
//
//@RestController
//public class NewsController {
//@Autowired
//NewsRepo rep;
//@Autowired
//NewsService ser;
//
//@GetMapping("/news/get")
//public List<NewsSource> theGet()
//{
// return rep.findAll();	
//}
//@GetMapping("news/get/{nid}")
//public Optional<NewsSource> theGetval(@PathVariable int nid) 
//{
//   return rep.findById(nid);	
//}
//@PostMapping("news/post")
//public NewsSource thePost(@RequestBody NewsSource ns) 
//{
// return rep.save(ns);	
//}
//@DeleteMapping("news/del/{nid}")
//public String theDel(@PathVariable int nid) 
//{
//  return ser.del(nid);	
//}
//@PutMapping("news/put/{nid}")
//public String thePut(@RequestBody NewsSource ns,@PathVariable int nid) 
//{
// return ser.update(ns, nid);	
//}
//}
