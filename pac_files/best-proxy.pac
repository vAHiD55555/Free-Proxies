function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 62.133.62.12:1082",
        "SOCKS 159.8.114.37:80",
        "SOCKS 119.81.189.194:80",
        "SOCKS 66.135.227.178:4145",
        "SOCKS 123.54.197.21:22077",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 185.236.202.170:3128",
        "SOCKS 119.84.215.127:3256",
        "SOCKS 52.3.65.23:80",
        "SOCKS 79.110.52.252:3128",
        "SOCKS 109.120.135.230:2030",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 157.230.1.108:14070",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 18.233.58.30:80",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 51.158.98.211:16379",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}