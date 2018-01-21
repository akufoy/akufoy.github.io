$(document).ready(function(){
    $('#group_projects').click(function() {
        $('#toggle_text').html('This was a group project showcasing pandas and API usage. The meetup API was used to create plots for popular interest based on location. Pandas was used to manipulate and clean data. Matplotlib was used to create plots.');
    });

    $('#sql_sakila').click(function() {
        $('#toggle_text').html('MySQL was used to manipulate data in the sakila database. Tables were created using various SQL commands.');
    });

    $('#tweepy').click(function() {
        $('#toggle_text').html('Use Tweepy library in Python for sentiment analysis of various Twitter accounts. Matplotlib was used for plotting data.');
    });

    $('#pyber').click(function() {
        $('#toggle_text').html('Used Pandas and Matplotlib libraries to analyze and plot ride sharing data.');
    });
});