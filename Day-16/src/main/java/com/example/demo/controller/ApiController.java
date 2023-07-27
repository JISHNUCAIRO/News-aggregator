package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.NewsSource;
import com.example.demo.repository.NewsRepo;
import com.example.demo.service.NewsApiService;

@RestController
public class ApiController {
@Autowired
NewsRepo rep;
@Autowired
NewsApiService nas;

@GetMapping("/api/v1/fetch")
public List<NewsSource> get()
{
	return nas.fetchNews();
}
@GetMapping("/api/v1/data-update")
public String DataUpdate()
{
	return nas.saveNewsToDatabase();
}
@GetMapping("/api/v1/news/get")
public List<NewsSource> getAll() {
	return rep.findAll();
}

@PostMapping("/api/v1/news/post")
public NewsSource create(@RequestBody NewsSource ns) {
	return rep.save(ns);
}
}
