package com.example.demo.service;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

public class NewsApiResponse {
    @JsonProperty("news")
    private List<NewsApi> articles;
    
   
    public NewsApiResponse(List<NewsApi> articles) {
		super();
		this.articles = articles;
	}
    

	public NewsApiResponse() {
		super();
		// TODO Auto-generated constructor stub
	}

	public List<NewsApi> getNews() {
        return articles;
    }
    

	public void setNews(List<NewsApi> articles) {
        this.articles = articles;
    }
}

