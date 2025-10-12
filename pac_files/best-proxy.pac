function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 123.128.12.93:9050",
        "SOCKS 91.214.62.121:8053",
        "SOCKS 103.148.212.250:1080",
        "SOCKS 8.215.18.222:1100",
        "SOCKS 103.162.54.164:2233",
        "SOCKS 72.10.160.173:24063",
        "SOCKS 43.129.234.168:1080",
        "SOCKS 128.140.113.110:3128",
        "SOCKS 105.158.195.221:8085",
        "SOCKS 111.196.187.145:7890",
        "SOCKS 194.145.200.184:3128",
        "SOCKS 8.220.205.172:80",
        "SOCKS 185.93.89.182:4269",
        "SOCKS 113.183.43.123:8080",
        "SOCKS 102.22.193.35:8080",
        "SOCKS 138.199.25.13:3907",
        "SOCKS 18.143.167.190:9947",
        "SOCKS 148.178.124.75:8888",
        "SOCKS 90.19.216.199:8080",
        "SOCKS 43.249.174.163:8118",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}