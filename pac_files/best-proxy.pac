function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 115.127.106.226:1088",
        "SOCKS 72.10.160.90:32931",
        "SOCKS 62.60.131.178:4007",
        "SOCKS 20.78.118.91:8561",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 109.120.135.230:2030",
        "SOCKS 119.84.215.127:3256",
        "SOCKS 37.120.133.137:3128",
        "SOCKS 155.212.170.93:10808",
        "SOCKS 178.62.116.7:1080",
        "SOCKS 62.60.131.197:4035",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 89.249.65.191:3128",
        "SOCKS 45.156.186.105:12988",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 20.27.15.111:8561",
        "SOCKS 113.100.209.184:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}