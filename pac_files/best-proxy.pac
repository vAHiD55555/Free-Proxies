function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 58.19.55.17:15228",
        "SOCKS 194.233.78.142:42495",
        "SOCKS 185.112.224.151:1080",
        "SOCKS 206.123.156.230:8090",
        "SOCKS 206.123.156.179:10219",
        "SOCKS 79.122.230.20:8080",
        "SOCKS 58.19.55.17:15376",
        "SOCKS 36.7.252.165:3256",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 103.114.53.2:8080",
        "SOCKS 5.255.99.75:1080",
        "SOCKS 66.135.227.178:4145",
        "SOCKS 176.113.73.99:3128",
        "SOCKS 103.28.121.58:3128",
        "SOCKS 103.187.39.21:1080",
        "SOCKS 141.11.187.163:8080",
        "SOCKS 84.17.51.240:3128",
        "SOCKS 202.58.16.236:1080",
        "SOCKS 206.123.156.230:4894",
        "SOCKS 181.214.39.72:5719",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}