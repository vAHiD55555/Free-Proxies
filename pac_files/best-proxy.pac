function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 193.239.86.247:3128",
        "SOCKS 185.236.202.205:3128",
        "SOCKS 169.57.157.146:8123",
        "SOCKS 38.23.34.11:40003",
        "SOCKS 119.81.71.27:80",
        "SOCKS 212.110.188.189:34405",
        "SOCKS 212.110.188.207:34405",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 16.78.219.183:1964",
        "SOCKS 193.34.95.110:8080",
        "SOCKS 35.180.188.216:80",
        "SOCKS 125.141.139.110:5566",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 185.123.101.174:3128",
        "SOCKS 159.8.114.37:8123",
        "SOCKS 115.114.77.133:9090",
        "SOCKS 167.172.109.12:39533",
        "SOCKS 5.129.216.47:1081",
        "SOCKS 84.17.51.241:3128",
        "SOCKS 66.245.197.108:9001",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}