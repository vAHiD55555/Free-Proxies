function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 125.141.139.112:5566",
        "SOCKS 43.133.32.76:1777",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 195.162.19.75:80",
        "SOCKS 167.172.109.12:46249",
        "SOCKS 95.111.226.235:3128",
        "SOCKS 206.189.130.107:8080",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 192.53.114.26:80",
        "SOCKS 66.135.227.178:4145",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 67.43.228.252:5023",
        "SOCKS 136.118.15.230:8000",
        "SOCKS 104.248.197.67:1080",
        "SOCKS 102.36.127.53:1080",
        "SOCKS 94.100.18.111:3128",
        "SOCKS 91.237.249.78:1080",
        "SOCKS 18.141.177.23:80",
        "SOCKS 218.78.65.202:6688",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}