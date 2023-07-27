package com.example.demo.news;

// import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

// @JsonIgnoreProperties(ignoreUnknown = true)
public class NewsApiResponse {

    @JsonProperty("articles")
    private List<NewsApiArticleDTO> articles;

    

    public NewsApiResponse(List<NewsApiArticleDTO> articles) {
        this.articles = articles;
    }

    public NewsApiResponse() {
    }

    public List<NewsApiArticleDTO> getArticles() {
        return articles;
    }

    public void setArticles(List<NewsApiArticleDTO> articles) {
        this.articles = articles;
    }
}
