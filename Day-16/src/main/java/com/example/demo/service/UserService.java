//package com.example.demo.service;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import com.example.demo.model.UserDetail;
//import com.example.demo.repository.UserRepo;
//
//@Service
//public class UserService {
//@Autowired
//UserRepo rep;
//public String del(int uid) 
//{
// if(rep.existsById(uid))
// {
//	 rep.deleteById(uid);
//	 return "Id "+uid+" deleted successfully";
// }
// else
//	 return "Id doesn't exist";
//}
//public String update(UserDetail ud,int uid) 
//{
//	if(rep.existsById(uid)) 
//	{
//		UserDetail u = new UserDetail();
//		u.setUid(ud.getUid());
//		u.setUser_name(ud.getUser_name());
//		u.setUser_password(ud.getUser_password());
//		u.setUser_email(ud.getUser_email());
//         rep.save(u);
//         return "Updated";
//	}
//	else
//		return "Id doesn't exist";
//}
//}
