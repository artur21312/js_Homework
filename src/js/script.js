'use strict';

$(document).ready(function() {

    var city = 'LVIV';
    var apiKey = '5d066958a60d315387d9492393935c19';
    var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`;


    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'json',
        success: function(data) {

            $('#city-name').text('Місто: ' + data.name);
            $('#temperature').text('Температура: ' + data.main.temp + ' °C');
            $('#pressure').text('Тиск: ' + data.main.pressure + ' hPa');
            $('#humidity').text('Вологість: ' + data.main.humidity + ' %');
            $('#description').text('Опис: ' + data.weather[0].description);
            $('#wind-speed').text('Швидкість вітру: ' + data.wind.speed + ' м/с');
            $('#wind-direction').text('Напрям вітру: ' + data.wind.deg + '°');


            var iconUrl = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
            $('#weather-icon').attr('src', iconUrl);
        },
        error: function() {
            alert('Не вдалося отримати дані');
        }
    });
});