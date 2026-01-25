function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 206.189.130.107:8080",
        "SOCKS 36.255.98.175:9021",
        "SOCKS 167.172.109.12:46249",
        "SOCKS 81.12.119.171:8080",
        "SOCKS 36.255.98.178:14049",
        "SOCKS 62.60.131.194:4437",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 36.255.98.167:8567",
        "SOCKS 62.60.131.179:4045",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 36.255.98.184:7870",
        "SOCKS 95.163.153.116:44937",
        "SOCKS 185.189.112.157:3128",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 36.255.98.178:4649",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 27.147.163.188:40544",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 89.249.65.191:3128",
        "SOCKS 36.255.98.163:4991",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}