---
title: 'Exploring the BRFSS data'
author: 'Juan M. Rada'
date: '2015-09-10'
description: 'Introduction to probability course by Duke University - Final project'
tags: ['rstudio', 'datascience']
---

# Overview

This was my final project for the "Introduction to Probability" course at Duke University.
The goal of this project was to understand the foundations of R using RStudio.
![Rstudio](https://www.rstudio.com/wp-content/uploads/2019/05/rstudio-og-fb.jpg)

### About the data

The Behavioral Risk Factor Surveillance System (BRFSS) is a project in charge of collecting specific data about the practice
of preventive health. The sample is taken through questions over the phone; therefore, the questions are subject to no response. As a result, the data presented is provided from the people willing and able to answer the questions. In addition, the survey draws from participants across the entire United States. Although it does not represent a large part of the general population, the sample is useful
to find statistical significance.

### Research questions

1. What distribution follows the time of sleep?
2. At higher income is there a better health condition (specifically diabetes)?
3. Is there a correlation between body mass and the existence of
   diabetes?

### Conclusions

1. It can be concluded that even eliminating the extreme values, the
   sleep time follows an approximately normal distribution.
   ![Some nice charts with Ggplot2](https://cdn1.bbcode0.com/uploads/2021/5/25/390a09a62c3237afa8f2b1df5a77551b-full.png)
2. The data suggest that the higher the level of income, the lower
   the probability of having diabetes
   ![Some nice charts with Ggplot2](https://cdn1.bbcode0.com/uploads/2021/5/25/70d94b1887034f2731842191934a0308-full.png)
3. The correlation is inverse due to the order of the data, however
   there is no consistency and the data suggests that there is not enough statistical evidence.

[Check it out here](https://s3.amazonaws.com/coursera-uploads/peer-review/2dHcFsRdEeW2JxKnR3RyOw/9ded8e6a4dd434630b78a8f462531b19/_6ee2a5c3100b9237616844a52883e240_intro_data_prob_project.html)
