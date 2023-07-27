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
//import com.example.demo.entity.User;
//import com.example.demo.repository.UserRepo;
//import com.example.demo.service.UserService;
//
//@RestController
//public class UserController {
//@Autowired
//UserRepo rep;
//@Autowired
//UserService ser;
//@GetMapping("/get")
//public List<User> theGet()
//{
// return rep.findAll();	
//}
//@GetMapping("/get/{uid}")
//public Optional<User> theGetval(@PathVariable int uid) 
//{
//   return rep.findById(uid);	
//}
//@PostMapping("/post")
//public User thePost(@RequestBody User ud) 
//{
// return rep.save(ud);	
//}
//@DeleteMapping("/del/{uid}")
//public String theDel(@PathVariable int uid) 
//{
//  return ser.del(uid);	
//}
//@PutMapping("/put/{uid}")
//public String thePut(@RequestBody User ud,@PathVariable int uid) 
//{
// return ser.update(ud, uid);	
//}
//}
