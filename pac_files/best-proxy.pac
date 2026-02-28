function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 64.227.131.240:1080",
        "SOCKS 167.172.109.12:39452",
        "SOCKS 70.34.199.124:10808",
        "SOCKS 194.163.182.6:1080",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 213.35.110.67:10898",
        "SOCKS 119.81.71.27:80",
        "SOCKS 119.81.189.194:8123",
        "SOCKS 176.113.73.104:3128",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 178.128.167.129:1080",
        "SOCKS 94.100.18.111:3128",
        "SOCKS 103.174.178.133:1020",
        "SOCKS 173.236.187.104:40355",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 88.210.11.250:1080",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 81.12.119.171:8080",
        "SOCKS 213.35.110.67:10880",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}