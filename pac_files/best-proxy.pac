function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.15.196.107:16379",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 150.136.153.231:80",
        "SOCKS 128.140.113.110:3128",
        "SOCKS 94.100.18.111:3128",
        "SOCKS 119.81.189.194:8123",
        "SOCKS 20.78.118.91:8561",
        "SOCKS 71.168.71.12:8890",
        "SOCKS 167.172.109.12:46249",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 42.114.172.226:2113",
        "SOCKS 34.47.254.160:3128",
        "SOCKS 103.28.121.58:80",
        "SOCKS 185.123.101.174:3128",
        "SOCKS 88.99.10.252:1080",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 103.28.121.58:3128",
        "SOCKS 38.253.88.242:999",
        "SOCKS 193.216.224.108:8192",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}