function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 120.224.234.71:7300",
        "SOCKS 206.189.130.107:8080",
        "SOCKS 146.235.19.84:10850",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 194.28.162.12:1080",
        "SOCKS 67.43.228.252:1237",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 185.123.143.251:3128",
        "SOCKS 31.43.194.184:1080",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 43.209.8.12:93",
        "SOCKS 147.45.179.180:1081",
        "SOCKS 37.120.162.180:33084",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 167.172.109.12:39533",
        "SOCKS 37.120.162.180:24483",
        "SOCKS 37.120.162.180:41365",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 104.248.59.38:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}