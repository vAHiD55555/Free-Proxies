function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 67.43.228.251:28401",
        "SOCKS 147.75.34.74:10019",
        "SOCKS 138.121.15.230:999",
        "SOCKS 210.79.146.246:8085",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 174.64.199.79:4145",
        "SOCKS 152.53.168.53:44887",
        "SOCKS 8.208.97.82:3129",
        "SOCKS 70.36.99.51:3128",
        "SOCKS 68.183.36.141:3128",
        "SOCKS 212.110.188.207:34405",
        "SOCKS 103.99.136.66:8080",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 8.211.194.78:1080",
        "SOCKS 222.129.36.157:57114",
        "SOCKS 27.71.228.32:3128",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 124.83.110.164:8082",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}