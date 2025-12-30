function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 36.255.98.167:7878",
        "SOCKS 36.255.98.177:6452",
        "SOCKS 62.60.131.186:8939",
        "SOCKS 192.252.209.158:4145",
        "SOCKS 184.170.251.30:11288",
        "SOCKS 103.22.99.43:8085",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 62.60.131.195:4099",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 110.235.247.65:1080",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 62.60.131.181:38245",
        "SOCKS 62.60.131.178:8291",
        "SOCKS 67.43.228.254:30337",
        "SOCKS 5.75.235.252:11960",
        "SOCKS 115.127.178.34:2589",
        "SOCKS 142.54.237.38:4145",
        "SOCKS 213.195.244.71:8080",
        "SOCKS 5.75.235.252:39037",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}