function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 195.74.86.205:80",
        "SOCKS 103.172.42.179:8080",
        "SOCKS 186.148.178.195:999",
        "SOCKS 157.100.69.133:999",
        "SOCKS 168.121.220.68:999",
        "SOCKS 103.216.253.50:20000",
        "SOCKS 54.226.156.148:20201",
        "SOCKS 38.54.9.151:1234",
        "SOCKS 160.25.8.141:11011",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 185.93.89.155:4002",
        "SOCKS 103.133.27.159:8085",
        "SOCKS 38.156.73.61:8080",
        "SOCKS 72.10.160.91:2473",
        "SOCKS 103.70.79.3:8080",
        "SOCKS 77.221.134.220:3128",
        "SOCKS 103.53.79.115:8050",
        "SOCKS 102.209.18.204:8080",
        "SOCKS 79.127.56.147:8080",
        "SOCKS 72.10.160.94:16137",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}