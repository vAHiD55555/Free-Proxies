function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 152.53.36.101:37873",
        "SOCKS 195.98.82.62:1080",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 171.238.103.65:1081",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 125.141.139.110:5566",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 171.238.103.65:1088",
        "SOCKS 171.238.89.141:1081",
        "SOCKS 208.113.222.205:57226",
        "SOCKS 171.238.88.27:1088",
        "SOCKS 157.180.121.252:12380",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 51.15.133.214:16379",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}