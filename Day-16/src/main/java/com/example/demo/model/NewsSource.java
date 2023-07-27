package com.example.demo.model;
import io.micrometer.common.lang.NonNull;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name="news_source")
public class NewsSource {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private int nid;
@Column(name="title",length=1000)
private String title;
@Column(name="img",length=1000)
private String img;
@Column(name="urlToImage",length=1000)
private String urlToImage;
@Column(name="url",length=1000)
private String url;
@Column(name="description",length=1000)
private String description;
@Column(name="content",length=1000)
private String content;
private long likes=0;
private boolean isSaved;
}
