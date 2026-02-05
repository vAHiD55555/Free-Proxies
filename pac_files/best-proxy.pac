function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 65.108.159.129:8081",
        "SOCKS 103.114.53.2:8080",
        "SOCKS 119.81.71.27:8123",
        "SOCKS 79.110.52.252:3128",
        "SOCKS 167.172.109.12:37355",
        "SOCKS 18.219.243.198:3128",
        "SOCKS 112.98.218.73:57658",
        "SOCKS 123.54.197.53:23039",
        "SOCKS 138.201.139.252:12344",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 161.202.226.194:8123",
        "SOCKS 217.76.39.4:1080",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 13.36.243.194:9899",
        "SOCKS 194.233.78.142:42495",
        "SOCKS 20.27.15.111:8561",
        "SOCKS 171.247.148.115:8080",
        "SOCKS 169.57.157.148:80",
        "SOCKS 47.243.94.125:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}