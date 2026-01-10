function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 205.185.113.92:1080",
        "SOCKS 62.60.131.194:20047",
        "SOCKS 5.128.254.99:1080",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 45.168.244.16:8080",
        "SOCKS 36.255.98.160:4228",
        "SOCKS 72.10.160.171:19063",
        "SOCKS 37.120.140.158:3128",
        "SOCKS 223.25.110.37:8199",
        "SOCKS 78.12.223.246:2724",
        "SOCKS 103.28.121.58:3128",
        "SOCKS 202.62.47.98:1080",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 103.81.175.218:28022",
        "SOCKS 95.111.226.235:3128",
        "SOCKS 114.67.227.38:8080",
        "SOCKS 138.201.139.252:12344",
        "SOCKS 185.236.202.205:3128",
        "SOCKS 51.222.241.8:42378",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}