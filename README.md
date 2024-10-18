# NFL Data Engineering

## Overview

This project measures the popularity of NFL teams during 2023 by analyzing various factors. We extracted and cleaned data from a variety of sources and uploaded cleaned data to a PostGreSQL database. The metrics we used to define and analyze "popularity" were:
- Stadium capacity
- TV viewership
- Social media following
- Team revenue

## Table of Contents

1. [Analysis Process](#analysis-process)
2. [Ethical Considerations](#ethical-considerations)
3. [Dependencies](#dependencies)
4. [Installation Instructions](#installation-instructions)
5. [Features](#features)
6. [Acknowledgements](#acknowledgements)

## Analysis Process

1. Gather relevant datasets and create CSV files
2. Create schematics declaring primary and foreign keys
3. Load, clean, and transform data into usable datasets
4. Align keys across datasets to create visualizations

## Ethical Considerations

- Terms of service for the Nielsen Ratings Website were checked
- Web scraping of Nielsen Ratings data was performed for educational purposes only
- All work is cited, and an Appendix is included

## Dependencies

1. Pandas
2. NumPy
3. Matplotlib
4. Seaborn
5. Roman
6. Selenium WebDriver
7. BeautifulSoup
8. Plotly
9. Bubbly

## Installation Instructions

[To be added]

## Features

- Data visualization including:
  - Scatterplots
  - Scatterplot matrix (pairplot)
  - Bar plots
  - Animated bubble chart

## Acknowledgements

### Data Sources

- Attendance 2023: [ESPN](https://www.espn.com/nfl/attendance/_/year/2023)
- Ticket Price 2023: Statista.com (Published by Christina Gough)
- City Population: Census.gov
- Revenue 2023: [Statista](https://www.statista.com/statistics/193553/revenue-of-national-football-league-teams-in-2010/)
- Social Media Presence:
  - [Facebook Following](https://www.statista.com/statistics/240028/facebook-fans-of-national-football-league-teams/)
  - [Instagram Following](https://sports.yahoo.com/ranking-32-nfl-teams-instagram-150007302.html)
  - [Twitter Following](https://www.statista.com/statistics/240036/twitter-followers-of-national-football-league-teams/)
- TV Viewership: Statista.com
- Stadium Locations: [Kaggle](https://www.kaggle.com/datasets/kayla96/nfl-teams-data)
- Nielsen Ratings: [Nielsen Website](https://www.nielsen.com/news-center/2024/super-bowl-lviii-draws-123-7-million-average-viewers-largest-tv-audience-on-record/)

### Additional Resources

- [Google Search: Nielsen Ratings](https://www.google.com/search?q=what+does+the+hhld+rating+for+nielsen+rating)
- [Forbes: Nielsen Ratings Explanation](https://www.forbes.com/sites/seamuskirst/2015/12/18/what-are-nielsen-ratings-and-how-are-they-calculated/)
- [Pandas Documentation](https://pandas.pydata.org/docs/reference/plotting.html)
- [Sportico: NFL TV Ratings](https://www.sportico.com/business/media/2023/nfl-tv-ratings-report-cbs-fox-nbc-1234701217/)

## Project Process

1. ERD Schemata: Seth & Team
2. SQL Databases: Team
3. Organize Datasets: Team Effort
   - Extract, Transform, Load:
     - Team Data: Seth
     - City Data: Rachel
     - Stadium Data: Lilliana
     - TV Data: Talibah
     - Social Media Data: Isfund
4. Visualization:
   - Map
   - Popularity Index - Stacked Bar Graph (with parameters)
5. Powerpoint:
   - Each team member will document and present their data
