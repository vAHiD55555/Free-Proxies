function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 178.128.167.129:1080",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 185.93.89.157:4334",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 185.93.89.147:4236",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 173.236.187.104:40355",
        "SOCKS 117.74.65.207:80",
        "SOCKS 35.183.64.191:30309",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 202.152.44.18:8081",
        "SOCKS 185.93.89.181:4134",
        "SOCKS 167.172.159.43:39019",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}