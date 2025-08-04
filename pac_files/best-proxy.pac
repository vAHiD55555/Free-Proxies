function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 72.10.160.94:29225",
        "SOCKS 160.187.191.3:8082",
        "SOCKS 67.43.236.18:3927",
        "SOCKS 147.75.34.105:443",
        "SOCKS 209.121.164.51:31147",
        "SOCKS 184.178.172.28:15294",
        "SOCKS 47.236.163.74:8080",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 117.74.65.207:80",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 171.228.181.175:2001",
        "SOCKS 159.89.239.166:18084",
        "SOCKS 157.173.101.217:3128",
        "SOCKS 62.210.37.74:8012",
        "SOCKS 140.143.164.213:1080",
        "SOCKS 181.129.183.19:53281",
        "SOCKS 182.253.109.5:8080",
        "SOCKS 160.25.48.33:9090",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 222.129.33.141:57114",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}