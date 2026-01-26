function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 36.255.98.160:9326",
        "SOCKS 50.29.238.9:8888",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 36.255.98.164:5446",
        "SOCKS 36.255.98.168:6825",
        "SOCKS 185.189.112.157:3128",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 144.91.118.176:3128",
        "SOCKS 15.207.196.77:3128",
        "SOCKS 62.60.231.71:56608",
        "SOCKS 179.96.28.58:80",
        "SOCKS 51.158.105.107:16379",
        "SOCKS 13.36.243.194:9899",
        "SOCKS 62.60.131.182:4551",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 139.180.140.254:1080",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 62.60.131.195:4535",
        "SOCKS 185.123.143.247:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}