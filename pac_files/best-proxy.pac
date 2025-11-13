function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 104.219.236.127:1080",
        "SOCKS 89.58.45.94:15291",
        "SOCKS 46.10.229.243:7777",
        "SOCKS 185.14.68.130:8090",
        "SOCKS 40.192.38.216:5678",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 205.185.120.241:5556",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 38.183.144.18:1080",
        "SOCKS 160.20.146.24:8080",
        "SOCKS 152.53.36.101:54105",
        "SOCKS 103.216.253.50:20000",
        "SOCKS 89.58.45.94:12345",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 216.185.57.251:443",
        "SOCKS 37.221.193.221:26715",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 202.65.127.194:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}