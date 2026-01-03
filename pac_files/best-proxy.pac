function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 106.52.2.26:1080",
        "SOCKS 43.167.208.78:6006",
        "SOCKS 217.76.39.4:1080",
        "SOCKS 115.221.245.167:1080",
        "SOCKS 43.167.185.23:6006",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 36.255.98.160:18787",
        "SOCKS 125.141.139.110:5566",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 180.211.187.187:8008",
        "SOCKS 162.144.74.156:3620",
        "SOCKS 46.150.102.26:1080",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 125.227.225.157:3389",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 51.158.105.107:16379",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 62.60.131.184:4115",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}