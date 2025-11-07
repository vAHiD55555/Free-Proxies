function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 89.39.83.204:80",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 47.237.125.68:443",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 116.101.74.117:1035",
        "SOCKS 107.189.21.79:8118",
        "SOCKS 37.221.193.221:19972",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 157.180.121.252:19404",
        "SOCKS 91.214.62.121:8053",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 47.237.3.83:33333",
        "SOCKS 157.180.121.252:17043",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 37.221.193.221:10028",
        "SOCKS 37.221.193.221:12496",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 72.10.160.170:13701",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}