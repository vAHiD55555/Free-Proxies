function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 152.53.171.242:18115",
        "SOCKS 176.113.73.102:3128",
        "SOCKS 203.177.237.153:8080",
        "SOCKS 95.111.226.235:3128",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 178.22.31.205:1082",
        "SOCKS 8.220.149.222:80",
        "SOCKS 144.91.118.176:3128",
        "SOCKS 152.53.171.242:11726",
        "SOCKS 134.122.21.142:33346",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 202.62.52.20:1080",
        "SOCKS 152.53.171.242:27337",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 36.7.252.165:3256",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 79.110.52.252:3128",
        "SOCKS 193.233.254.7:1080",
        "SOCKS 51.15.196.107:16379",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}