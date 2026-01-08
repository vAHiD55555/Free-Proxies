function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.28.121.58:3128",
        "SOCKS 165.227.104.122:48500",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 119.81.189.194:8123",
        "SOCKS 39.105.116.150:1733",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 62.60.131.186:4612",
        "SOCKS 87.107.48.225:1080",
        "SOCKS 222.129.38.21:57114",
        "SOCKS 62.60.131.188:8090",
        "SOCKS 167.172.109.12:37355",
        "SOCKS 167.172.109.12:46249",
        "SOCKS 62.60.131.193:4241",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 5.255.113.177:1080",
        "SOCKS 67.205.153.110:51528",
        "SOCKS 119.84.215.127:3256",
        "SOCKS 84.17.51.241:3128",
        "SOCKS 47.83.211.225:1011",
        "SOCKS 18.141.177.23:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}