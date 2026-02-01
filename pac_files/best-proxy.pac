function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 123.182.233.70:7302",
        "SOCKS 152.53.171.242:12406",
        "SOCKS 36.255.98.184:4986",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 124.248.168.187:1080",
        "SOCKS 36.255.98.167:7501",
        "SOCKS 36.255.98.162:7821",
        "SOCKS 36.255.98.160:9966",
        "SOCKS 152.53.171.242:57457",
        "SOCKS 62.60.131.182:4627",
        "SOCKS 62.60.131.179:6243",
        "SOCKS 62.60.131.193:4147",
        "SOCKS 103.28.121.58:3128",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 152.53.171.242:22129",
        "SOCKS 36.255.98.160:6100",
        "SOCKS 185.189.112.133:3128",
        "SOCKS 185.175.229.58:1080",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 91.107.148.58:53967",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}