function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 62.60.131.194:4703",
        "SOCKS 72.10.160.170:16517",
        "SOCKS 205.185.120.241:5556",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 62.60.131.194:5841",
        "SOCKS 43.209.8.12:93",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 173.236.187.104:40355",
        "SOCKS 193.56.255.181:3128",
        "SOCKS 62.60.131.194:5799",
        "SOCKS 125.87.82.86:3256",
        "SOCKS 119.81.189.194:80",
        "SOCKS 193.34.95.110:8080",
        "SOCKS 36.255.98.181:15153",
        "SOCKS 51.158.68.68:8811",
        "SOCKS 36.255.98.175:21128",
        "SOCKS 36.255.98.153:5145",
        "SOCKS 47.238.203.170:50000",
        "SOCKS 36.255.98.169:7979",
        "SOCKS 62.60.131.188:5384",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}