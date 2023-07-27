package com.example.demo.news;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/news")
@CrossOrigin(origins="*")
public class NewsController {
    private final NewsDetailService newsDetailService;

    @Autowired
    public NewsController(NewsDetailService newsDetailService) {
        this.newsDetailService = newsDetailService;
    }

    @Autowired
    NewsDetailRepository repo;

    @GetMapping("/getNews")
    public List<NewsDetails> getAll() {
        return repo.findAll();
    }

    @GetMapping("/save")
    public String saveNews() {
        newsDetailService.saveNewsArticlesToDatabase();
        return "Data saved";
    }

    @GetMapping("/fetch")
    public String fetchAndStoreNews() {
        newsDetailService.saveNewsArticlesToDatabase();
        return "Data fetched and stored in the database.";
    }

    // Add other API endpoints as needed...

}
