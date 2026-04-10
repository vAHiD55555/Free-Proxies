function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.28.121.58:80",
        "SOCKS 163.172.131.178:16379",
        "SOCKS 159.8.114.37:80",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 202.62.55.95:1080",
        "SOCKS 206.123.156.224:6268",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 85.214.244.174:3128",
        "SOCKS 206.123.156.217:4542",
        "SOCKS 45.136.131.30:8446",
        "SOCKS 104.219.236.127:1080",
        "SOCKS 206.123.156.208:4113",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 38.145.218.162:8448",
        "SOCKS 119.81.71.27:80",
        "SOCKS 38.145.218.160:8448",
        "SOCKS 206.123.156.181:4328",
        "SOCKS 137.184.228.194:40886",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}