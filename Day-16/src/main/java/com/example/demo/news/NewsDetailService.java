package com.example.demo.news;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

@Service
public class NewsDetailService {
    private final NewsDetailRepository newsDetailRepository;
    private static final String API_KEY = "YOUR_NEWSAPI_KEY";

    @Autowired
    public NewsDetailService(NewsDetailRepository newsDetailRepository) {
        this.newsDetailRepository = newsDetailRepository;
    }

    public List<NewsDetails> fetchNewsArticles() {
        RestTemplate restTemplate = new RestTemplate();
        String url = "https://newsapi.org/v2/everything?q=apple&from=2023-07-23&to=2023-07-23&sortBy=popularity&apiKey=58f87828eb9a4aa581360633875d3d05";

        NewsApiResponse response = restTemplate.getForObject(url, NewsApiResponse.class);
        List<NewsDetails> newsDetailsList = new ArrayList<>();

        if (response != null && response.getArticles() != null) {
            for (NewsApiArticleDTO articleDTO : response.getArticles()) {
                NewsDetails newsDetails = mapToNewsDetails(articleDTO);
                newsDetailsList.add(newsDetails);
            }
        }

        return newsDetailsList;
    }

    private NewsDetails mapToNewsDetails(NewsApiArticleDTO articleDTO) {
        NewsDetails newsDetails = new NewsDetails();
        // newsDetails.setSource(articleDTO.getSource());
        newsDetails.setAuthor(articleDTO.getAuthor());
        newsDetails.setTitle(articleDTO.getTitle());
        newsDetails.setDescription(articleDTO.getDescription());
        newsDetails.setUrl(articleDTO.getUrl());
        newsDetails.setImg_url(articleDTO.getImg_url());
        newsDetails.setPublishedAt(articleDTO.getP_date()); // Using the new getter for publishedAt
        newsDetails.setContent(articleDTO.getContent());
        newsDetails.setLikes(0);
        newsDetails.setSaved(false);
        return newsDetails;
    }

    public void saveNewsArticlesToDatabase() {
        List<NewsDetails> newsDetailsList = fetchNewsArticles();
        newsDetailRepository.saveAll(newsDetailsList);
    }
}
