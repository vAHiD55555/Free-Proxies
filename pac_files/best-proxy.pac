function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 176.74.197.163:36918",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 114.236.93.203:15800",
        "SOCKS 223.25.110.37:8199",
        "SOCKS 43.167.233.228:6006",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 43.167.243.101:6006",
        "SOCKS 43.167.185.71:6006",
        "SOCKS 43.167.177.133:6006",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 93.43.251.159:80",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 43.167.254.34:6006",
        "SOCKS 43.167.252.56:6006",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 43.167.191.42:6006",
        "SOCKS 181.214.39.73:5719",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}