function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 174.138.62.182:43715",
        "SOCKS 157.180.121.252:26149",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 38.54.1.17:9999",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 223.25.109.146:8199",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 74.119.194.225:2094",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 194.135.105.137:10808",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 185.112.224.151:1080",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 138.124.61.15:1080",
        "SOCKS 67.205.153.110:51528",
        "SOCKS 117.74.65.207:80",
        "SOCKS 192.203.0.250:999",
        "SOCKS 103.163.13.14:1111",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}