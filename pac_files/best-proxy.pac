function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 36.7.252.165:3256",
        "SOCKS 152.53.171.242:30887",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 84.17.51.235:3128",
        "SOCKS 185.236.202.170:3128",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 119.81.71.27:80",
        "SOCKS 223.113.89.138:1080",
        "SOCKS 222.28.182.229:7890",
        "SOCKS 185.123.143.251:3128",
        "SOCKS 116.107.99.150:10002",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 88.99.10.252:1080",
        "SOCKS 143.110.217.153:1080",
        "SOCKS 104.248.146.99:3128",
        "SOCKS 119.84.215.127:3256",
        "SOCKS 103.239.52.157:1080",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 221.202.27.194:10811",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}