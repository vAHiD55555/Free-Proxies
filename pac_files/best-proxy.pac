function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 62.60.131.183:4101",
        "SOCKS 125.141.139.198:5566",
        "SOCKS 89.148.196.156:1080",
        "SOCKS 193.56.255.181:3128",
        "SOCKS 195.133.9.223:80",
        "SOCKS 95.163.153.116:44937",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 89.22.237.70:80",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 185.112.224.151:1080",
        "SOCKS 36.255.98.167:4713",
        "SOCKS 62.60.131.193:9931",
        "SOCKS 67.43.236.18:11595",
        "SOCKS 62.60.131.205:5707",
        "SOCKS 46.21.153.16:3128",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 36.255.98.160:15423",
        "SOCKS 205.185.114.78:5556",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}