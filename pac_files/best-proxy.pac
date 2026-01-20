function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.158.105.107:16379",
        "SOCKS 185.194.217.97:1080",
        "SOCKS 213.35.110.67:10819",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 208.102.24.225:8888",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 67.205.153.110:51528",
        "SOCKS 213.35.110.67:10850",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 46.8.69.128:1080",
        "SOCKS 167.172.253.162:4857",
        "SOCKS 94.184.25.25:240",
        "SOCKS 203.189.136.18:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}