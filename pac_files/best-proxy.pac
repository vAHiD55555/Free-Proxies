function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 62.60.131.203:11286",
        "SOCKS 36.255.98.167:7773",
        "SOCKS 36.255.98.181:5411",
        "SOCKS 5.199.166.243:9114",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 36.255.98.169:4938",
        "SOCKS 62.60.131.183:13609",
        "SOCKS 202.72.232.121:1080",
        "SOCKS 5.255.117.250:1080",
        "SOCKS 35.180.188.216:80",
        "SOCKS 5.199.166.251:9061",
        "SOCKS 180.183.97.16:8080",
        "SOCKS 81.12.119.171:8080",
        "SOCKS 36.255.98.153:5131",
        "SOCKS 193.221.203.121:1080",
        "SOCKS 62.60.131.204:5091",
        "SOCKS 62.60.131.203:5133",
        "SOCKS 62.60.131.204:5057",
        "SOCKS 62.60.131.253:5355",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}