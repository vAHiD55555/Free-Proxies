function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.54.57.117:50460",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 88.99.10.252:1080",
        "SOCKS 35.180.188.216:80",
        "SOCKS 217.172.122.14:8080",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 150.227.4.147:1080",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 54.183.194.246:80",
        "SOCKS 40.192.14.136:9292",
        "SOCKS 205.185.120.241:5556",
        "SOCKS 47.245.117.43:80",
        "SOCKS 43.133.32.76:1777",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 139.180.140.254:1080",
        "SOCKS 185.189.112.133:3128",
        "SOCKS 100.27.183.62:8080",
        "SOCKS 115.127.105.163:6699",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}