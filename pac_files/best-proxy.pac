function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 5.255.117.250:1080",
        "SOCKS 103.174.178.133:1020",
        "SOCKS 62.60.131.188:8082",
        "SOCKS 84.17.51.235:3128",
        "SOCKS 202.62.62.51:1080",
        "SOCKS 223.113.89.138:1080",
        "SOCKS 81.12.119.171:8080",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 185.189.112.157:3128",
        "SOCKS 176.113.73.102:3128",
        "SOCKS 47.239.61.82:9001",
        "SOCKS 102.217.190.157:7080",
        "SOCKS 5.75.168.247:8057",
        "SOCKS 94.230.127.180:1080",
        "SOCKS 51.16.209.246:8080",
        "SOCKS 193.233.254.9:1080",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 31.129.147.102:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}