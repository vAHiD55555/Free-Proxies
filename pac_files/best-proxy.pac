function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 125.141.133.49:5566",
        "SOCKS 194.233.78.142:42495",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 43.209.130.76:109",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 185.244.208.195:23699",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 103.17.37.195:1080",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 103.127.223.126:1080",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 185.93.89.146:10828",
        "SOCKS 61.130.151.230:7302",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 154.72.204.78:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}