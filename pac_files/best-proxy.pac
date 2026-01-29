function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 125.209.110.83:39617",
        "SOCKS 3.21.106.186:81",
        "SOCKS 36.255.98.184:4149",
        "SOCKS 167.172.109.12:41491",
        "SOCKS 20.210.76.178:8561",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 36.255.98.167:4071",
        "SOCKS 36.255.98.181:5411",
        "SOCKS 36.255.98.163:5665",
        "SOCKS 195.175.31.222:8080",
        "SOCKS 176.113.73.104:3128",
        "SOCKS 20.78.26.206:8561",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 62.60.131.253:19101",
        "SOCKS 13.229.47.109:80",
        "SOCKS 159.8.114.37:8123",
        "SOCKS 118.99.108.4:8080",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 62.60.131.188:5201",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}